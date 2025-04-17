import {Delete, Injectable, NotFoundException, Param} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import {INoteDto, INoteListDto} from "./dto/note.dto";
import {ICreateNoteDto} from "./dto/create-note.dto";
import {IUpdateNoteDto} from "./dto/update-note.dto";

@Injectable()
export class NotesService {
    constructor(
        @InjectRepository(Note)
        private noteRepo: Repository<Note>,
    ) {}

    async getAll(): Promise<{ items: INoteDto[] }> {
        const items = await this.noteRepo.find();
        return { items };
    }

    async getById(id: string): Promise<INoteDto> {
        const note = await this.noteRepo.findOneBy({ id });
        if (!note) throw new NotFoundException('Note not found');
        return note;
    }

    async create(dto: ICreateNoteDto): Promise<INoteDto> {
        const newNote = this.noteRepo.create(dto);
        return this.noteRepo.save(newNote);
    }

    async update(id: string, dto: IUpdateNoteDto): Promise<INoteDto> {
        const note = await this.noteRepo.findOneBy({ id });
        if (!note) throw new NotFoundException('Note not found');

        Object.assign(note, dto);
        return this.noteRepo.save(note);
    }

    async delete(id: string): Promise<{ success: boolean }> {
        const result = await this.noteRepo.delete(id);
        return { success: Boolean(result.affected) };
    }
}