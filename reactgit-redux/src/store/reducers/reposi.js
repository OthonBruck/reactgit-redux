export const Types = {
  ADD_REPO: "ADD_REPO",
  REMOVE_REPO: "REMOVE_REPO",
  UPDATE_REPO: "UPDATE_REPO",
};

const initialState = {
  listaRepos: [],
};
export const reposi = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_REPO:
      return {
        ...state,
        listaRepos: [...state.listaRepos, action.payload],
      };
    case Types.REMOVE_REPO:
      return {
        ...state,
        listaRepos: state.listaRepos.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    case Types.UPDATE_REPO:
      return {
        ...state,
        listaRepos: state.listaRepos.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};

export const creators = {
  addRepo: (repo) => ({
    //adiciona o repo a lista
    type: Types.ADD_REPO,
    payload: repo,
  }),
  removeRepo: (repo) => ({
    //remove o repo da lista
    type: Types.REMOVE_REPO,
    payload: repo,
  }),
  updateRepo: (repo) => ({
    //atualiza o repo na lista
    type: Types.UPDATE_REPO,
    payload: repo,
  }),
};
