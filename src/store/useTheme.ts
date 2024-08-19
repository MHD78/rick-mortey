import {create} from "zustand"

type useThemeType = {
    theme: "light"|"dark",
    changeThemeToDark:()=>void
    changeThemeToLight:()=>void
}

const useTheme = create<useThemeType>((set)=>({
    theme:"dark",
    changeThemeToDark:()=>set((state)=>({theme:state.theme = "dark"})),
    changeThemeToLight:()=>set((state)=>({theme:state.theme = "light"})),
}))


export default useTheme