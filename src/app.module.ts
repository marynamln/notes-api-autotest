import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './notes/notes.module';
import { Note } from './notes/note.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'notes.db',
      entities: [Note],
      synchronize: true,
    }),
    NotesModule,
  ],
})
export class AppModule {}