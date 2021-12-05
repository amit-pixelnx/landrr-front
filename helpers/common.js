
import { toast } from 'react-nextjs-toast'
import Cookies from 'js-cookie'

export let common = { 
    getAPI : async (params , cb) =>{
        // params.data.token =  Cookies.get('authToken');
        
        var detail = {
            method : params.method,
            headers : {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            }
        };

        if(params.isFormData){
            // delete detail.headers;
            detail.headers ={}
            detail['body'] = params.data;
        }else  if (params.method === 'post' || params.method === 'POST' || params.method === 'delete'){

            detail['headers']={ 'Content-Type': 'application/json' , 'Cache-Control' : 'no-cache'};
            detail['body'] = JSON.stringify(params.data);
        
        }else{
            

            if(Object.keys(params.data).length){
                var str = [];
                for (var p in params.data){
                    if (params.data.hasOwnProperty(p)) {
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params.data[p]));
                    }
                }
                  
				if(params.url.indexOf('?') !== -1){
                    params.url += '&'+str.join('&'); 
				}else{
				    params.url += '?'+str.join('&'); 
				}  				
            }
        }
        
        detail['headers']['Authorization'] = 'Bearer '+Cookies.get('authToken');
        

        let urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;    
        params.url = urlRegex.test(params.url)?params.url:process.env.API_URL+params.url        
        // console.log(detail);
        try {
            await fetch(params.url ,detail).then(res2 => res2.json()).then((resp) => {
                if (resp.ok) {                
                    if(resp.message && resp.message != ''){
                        toast.notify(resp.message , { type: "success" });
                    }
                    cb(resp);
                    return resp;
                } else {
    
                    if(resp.message && resp.message != ''){
                        toast.notify(resp.message , { type: "error" });
                    }
                    
                    // console.log("Registration failed." , respData.message);
                    // let error = new Error(respData.message);
                    // error.response = respData.message;
                    // return Promise.reject(error);
                    
                }
            });
            
        } catch (error) {
            // toast.notify(error , { type: "error" });
        //   throw new Error(error);
        }

    },
    // tableData : (params) => {

    // },
    // showPerPageRecord : () =>{

    // }
}

export let getRandomChar =  () => {
    return Math.random().toString(36).slice(-8);    
}

export const convertToCSV = (objArray) => {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','
                line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}

export const exportCSVFile = (headers, items, fileTitle) => {
    if (headers) {
        items.unshift(headers);
    }
    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);
    var csv = convertToCSV(jsonObject);
    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}



// export default common;
