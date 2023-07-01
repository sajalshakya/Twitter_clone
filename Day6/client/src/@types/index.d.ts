declare module "twitter/type" {
  export type TPost = {
    id: number | string;
    title: string;
    body: string;
  };
  export type TComment = {
    id: number;
    body: string;
  };
  export type TApiResponse<T> = {
    success: boolean;
    message: string;
    data: T;
    status: number;
  };
  export type TThemeContextType = [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ];
  export type TThemeContextType_new = {
    darkMode: boolean;
    toggleDarkMode: () => void;
  };
}
