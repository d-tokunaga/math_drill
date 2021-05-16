export interface ApiData {
name: {
    title: string;
    first: string;
    last: string;
};
email: string;
}

export interface ApiResponse {
results: Array<ApiData>;
info: {
    seed: string;
    results: number;
    page: number;
    version: string;
};
}

export interface DATA_PROPS {
    data1: Array<String>;
    data2: Array<String>;
}

export interface PdfDocumentProps {
    title: string;
    document: JSX.Element;
}