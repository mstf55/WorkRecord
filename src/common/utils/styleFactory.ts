export class StyleFactory {
  public static getStyle(sign: string) {
    const signToColors = { o: "green", e: "blue", t: "yellow" };
    return signToColors[sign];
  }
}
