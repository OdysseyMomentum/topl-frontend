export class Mission {
    constructor(
        public id: number,
        public latitude: string,
        public longitude: string,
        public dateTime: string,
        public msgCode?: string
      ) {  }
}



/**
 *
 * {
    "MetaHeader": {
        "blockchain": "topl-testnet",
        "originatorAddress": "5JJquNw481t6ch3jn7maTZMmP6Suva19sdmQZ1ZNco7fzJmmGx9"
    },
    "MessageHeader": {
        "Prefix": "WF",
        "Version": "1",
        "EncryptionIndicator": "0",
        "DuressIndicator": "0",
        "MessageCode": "M",
        "ReferenceIndicator": "0",
        "ReferencedMessage": "0000000000000000000000000000000000000000000000000000000000000000"
    },
    "MessageBody": {
        "SubjectCode": "21",
        "DateTime": "2020-05-12T13:30:00Z",
        "Duration": "P00D00H00M",
        "ObjectType": "15",
        "ObjectLatitude": "+29.76017",
        "ObjectLongitude": "-095.36937",
        "ObjectSizeDim1": "0000",
        "ObjectSizeDim2": "0000",
        "ObjectOrientation": "000"
    }
}
 */