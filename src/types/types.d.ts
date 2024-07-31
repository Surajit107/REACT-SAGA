
// Define the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface Data {
    _id: string;
    full_name: string;
    email: string;
    designation: string;
    is_highlighted: boolean;
    message: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface DataState {
    data: Array<Data>;
    loading: boolean;
    error: string | null;
    type: string;
}