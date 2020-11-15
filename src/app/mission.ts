export class Mission {
    constructor(
        public id: number,
        public latitude: string,
        public longitude: string,
        public dateTime: string,
        public msgCode?: string
      ) {  }
}
