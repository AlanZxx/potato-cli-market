import Vue from 'vue';
Vue.filter('formatDate',function(date, type)
{
    if (date != null && date != "") {
        let yer,
            month,
            day,
            HH,
            mm,
            ss,
            timeDate;
        console.log(date)
        let time = new Date();
        console.log(time)
        yer = time.getFullYear();
        month = time.getMonth() + 1;
        day = time.getDate();
        HH = time.getHours(); //获取系统时，
        mm = time.getMinutes(); //分
        ss = time.getSeconds(); //秒
        console.log(yer+' '+month+' '+day+' '+HH+' '+mm+' '+' '+ss+'')
        month = (month < 10) ? ('0' + month) : month;
        day = (day < 10) ? ('0' + day) : day;
        HH = (HH < 10) ? ('0' + HH) : HH;
        mm = (mm < 10) ? ('0' + mm) : mm;
        ss = (ss < 10) ? ('0' + ss) : ss;

        switch (type) {
            case 'yyyy':
                timeDate = String(yer);
                break;
            case 'yyyy-MM':
                timeDate = yer + '-' + month;
                break;
            case 'yyyy-MM-dd':
                timeDate = yer + '-' + month + '-' + day;
                break;
            case 'yyyy/MM/dd':
                timeDate = yer + '/' + month + '/' + day;
                break;
            case 'yyyy-MM-dd HH:mm:ss':
                timeDate = yer + '-' + month + '-' + day + ' ' + HH + ':' + mm + ':' + ss;
                break;
            case 'HH:mm:ss':
                timeDate = HH + ':' + mm + ':' + ss;
                break;
            case 'MM':
                timeDate = String(month);
                break;
            default:
                timeDate = yer + '年' + month + '月' + day + '日' +' '+HH+':'+mm+":"+ss;
                break;
        }
        return timeDate;
    } else {
        return '';
    }
})
