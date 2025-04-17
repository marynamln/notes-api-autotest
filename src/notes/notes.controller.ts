import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {INoteDto, INoteListDto} from "./dto/note.dto";
import {NotesService} from "./notes.service";
import {ICreateNoteDto} from "./dto/create-note.dto";
import {IUpdateNoteDto} from "./dto/update-note.dto";

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Get()
    async getAll(): Promise<INoteListDto> {
        return await this.notesService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<INoteDto> {
        return await this.notesService.getById(id);
    }

    @Post()
    async create(@Body() createDto: ICreateNoteDto): Promise<INoteDto> {
        return await this.notesService.create(createDto);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateDto: IUpdateNoteDto,
    ): Promise<INoteDto> {
        return await this.notesService.update(id, updateDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<{ success: boolean }> {
        return await this.notesService.delete(id);
    }
}
