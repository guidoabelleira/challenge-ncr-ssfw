import axios from 'axios';
import {filterData} from '../hooks/index';

export const getData = async () => {
    try {
        let response = await axios.get("https://api.npoint.io/97d89162575a9d816661");
        console.log("response", response)
        console.log("data", response.data)
        if(response.status === 200) {
            if(response.data.cuentas) {
                return {
                    status: true,
                    cuentas: filterData(response.data.cuentas)
                }
            } else {
                return {
                    status: false,
                    mensaje: "Error Data"
                }
            }
        } else {
            return {
                status: false,
                mensaje: "Error Api"
            }
        }
    } catch (error) {
        console.log("error getData", error)
        return {
            status: false,
            mensaje: "Error Api"
        }
    }
}