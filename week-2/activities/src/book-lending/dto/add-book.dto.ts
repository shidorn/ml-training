export class AddBookDto {
  id: number;
  title: string;
  author: string;
  borrowed: boolean;
  userId: number;
  dueDate: Date;
}
