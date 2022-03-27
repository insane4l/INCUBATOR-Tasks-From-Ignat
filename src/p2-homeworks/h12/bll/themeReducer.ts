export type ThemeType = 'main' | 'dark' | 'js' | 'react' | 'purple_liquid'

const initState = {
    currentTheme: 'main' as ThemeType
};

type InitialStateType = typeof initState

export const themeReducer = (state: InitialStateType = initState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'hw/theme/CHANGE_THEME': {
            return {
                ...state,
                currentTheme: action.payload.theme
            }
        }
        default: return state;
    }
};

type ActionTypes = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme: ThemeType) => (
    {type: 'hw/theme/CHANGE_THEME', payload: {theme}} as const
);