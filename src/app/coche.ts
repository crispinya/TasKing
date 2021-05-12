//corregir fallo***************
export class Coche {
  public foto: string;
  public marca: string;
  public modelo: string;
  public fecha_modelo: Date;
  public fecha_venta: Date;
  public precio: number;
  public getPVP()
  {
    return this.precio*1.21;
  }
  public estado: EstadoCoche;
  enum EstadoCoche {BUENO, MALO};

}
