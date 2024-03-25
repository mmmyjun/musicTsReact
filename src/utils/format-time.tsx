export function TimestampToMmss(timestamp: string | number) {
    // 时间戳是从1970年01月01日00时00分00秒 (UTC)起至现在经过的总秒数，精确到秒是10位，精确到毫秒是13位。
    let date = String(timestamp).length == 10 ? new Date(Number(timestamp)) : new Date(Number(timestamp) * 1000);
    // let Y = date.getFullYear() + '-';
    // let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    // let D = date.getDate() + ' ';
    // let h = date.getHours() + ':';
    let m = date.getMinutes();
    let s = date.getSeconds();


    // 转换为 mm:ss 格式
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

export function MmssToS(str: string | number) {
    // 把mm:ss转化成纯s数
    let arr = String(str).split(':');
    return arr.length === 2 ? Number(arr[0]) * 60 + Number(arr[1]) : 0;
}

export function TotalSToMmss(totalS: number) {
    let integer: number = parseInt(String(totalS))
    let minute = String(Math.floor(integer / 60)).padStart(2, '0')
    let ss = String(Math.floor(integer % 60)).padStart(2, '0')
    return minute + ':' + ss
}