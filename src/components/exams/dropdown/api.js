import axios from "axios";
const opendataUrl = "https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP049/107";



// * 取得縣市
let getCity = (func) => {
    axios.get(opendataUrl).then(res => {
        let data = [];
        return res.data;
        res.data.responseData.forEach(element => {
            let city = element[Object.keys(element)[0]];
            if (data.findIndex(item => item.value == city) == -1) {
                data.push({ text: city, value: city });
            }
        });
        func(data);
    })
}

// 取得區域
let getSite = (searchCity, func) => {
    axios.get(opendataUrl).then(res => {
        let data = [];
        res.data.responseData.forEach(element => {
            let city = element[Object.keys(element)[0]];
            let site_id = element.site_id;
            if (city == searchCity) {
                if (data.findIndex(item => item.value == site_id) == -1) {
                    data.push({ text: site_id, value: site_id });
                }
            }
        });
        func(data);
    })
}

// 取得路名
let getRoad = (searchSite, func) => {
    axios.get(opendataUrl).then(res => {
        let data = [];
        res.data.responseData.forEach(element => {
            let city = element[Object.keys(element)[0]];
            let site_id = element.site_id;
            let road = element.road;
            if (site_id == searchSite) {
                if (data.findIndex(item => item.value == site_id) == -1) {
                    data.push({ text: road, value: road });
                }
            }
        });
        func(data);
    })
}

export { getCity, getSite, getRoad }