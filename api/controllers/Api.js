const axios  = require('axios');
const headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'};
exports.api_get_states =  async (req,res,next)=>{
    try{
        const response = await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states',{
            headers: headers
        });
        await res.status(200).json({
            count:response.data.states.length,
            states:response.data.states
         });
    }catch(error){
        res.status(404).json({
            count:0,
            error:error
        });
    }
}

exports.api_get_districts= async (req,res,next)=>{
    const id = req.params.id;
    try{
        const response = await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+id,{
            headers: headers
        });
        await res.status(200).json({
            count:response.data.districts.length,
            districts:response.data.districts
         });
    }catch(error){
        res.status(404).json({
            count:0,
            error:error
        });
    }
}

exports.api_get_slots =  async (req,res,next)=>{
    const id = req.params.id;
    try{
        const response = await axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id='+id+'&date=19-05-2021',{
            headers: headers
        });
        await res.status(200).json({
            count:response.data.centers.length,
            centers:response.data.centers
         });
    }catch(error){
        res.status(404).json({
            count:0,
            error:error
        });
    }
}

