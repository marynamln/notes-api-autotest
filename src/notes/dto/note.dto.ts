export interface INoteDto {
    id: string;
    title: string;
    content: string;
}

export interface INoteListDto {
    items: INoteDto[];
}
