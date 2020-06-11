export class Gif {
    constructor(
      public data: Array<Data>
    ) {}
}

export class Data {
    constructor(
        public images: Image,
        public title: string
    ) {}
}

class Image {
    constructor(
      public fixed_height: Height
    ) {}
}

class Height {
    constructor(
      public url: string
    ) {}
}