export class DeletePersonRequest {
  public id: number;
  
  constructor(req: any) {
    this.id = req.params.id;
  }
}
