import axios from "axios";
export const getAll = async function(filters=""){
    let filterStr = filters ? "?":"";
    if(filters){
        for(const filter in filters){
            filterStr= filterStr+`${filter}=${filters[filter]}&`;
        }
    }
    return await axios.get(`https://pokemons-data.herokuapp.com/api/v1/pokemons${filterStr}`);
}
export const remove = async function(id){
    return await axios.delete(`https://pokemons-data.herokuapp.com/api/v1/pokemons/${id}`);
}
export const getOne = async function (id){
    return await axios.get(`https://pokemons-data.herokuapp.com/api/v1/pokemons/${id}`);
}
export const update = async function (id,data){
    return await axios.put(`https://pokemons-data.herokuapp.com/api/v1/pokemons/${id}`, data);
}
export const add = async function (data){
    return await axios.post(`https://pokemons-data.herokuapp.com/api/v1/pokemons`, data);
}