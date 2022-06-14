export interface Categories {
    id: number;
    code: string;
    title: string;
    description: string;
    idParentCategory: number;
    createDate?: string;
    updateDate?: string;
    softDelete?: string | null;

}