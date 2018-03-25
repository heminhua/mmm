requirejs(['jquery','bootstrap','tmpl'],
function   ($,bts,tmpl) {
    //导航
   $.ajax({
       url:Api.getindexmenu,
       type:'get',
       success:function (res) {
           console.log(res);
           var str='';
           for (let i = 0; i < res.result.length; i++) {
             str+=` <li>
                <a href="${res.result[i].titlehref}">
                 ${res.result[i].img}
                 <p>${res.result[i].name} </p>
                </a>
             </li>`;
           }
           $('.nav').html(str);
       }
   })

  
//
   $.ajax({
       url:Api.getmoneyctrl,
       type:'get',
       success:function (res) {
        //    console.log(res);
           var html='';
           for (let i = 0; i < res.result.length; i++) {
              html+=` <li>
              <a href="#" class="clearfix">
                 ${res.result[i].productImgSm}
                  <div class="title">
                     ${res.result[i].productName}
                      <span class="price">${res.result[i].productPinkage}</span>
                  </div>
                  <p>
                      <span>${res.result[i].productFrom}|${res.result[i].productTime}</span>
                      &nbsp;&nbsp;<span>${res.result[i].productComCount}</span>
                  </p>
              </a>
          </li>`;
           }
           $('#goodsAll').html(html)
       }
   })
//模板不行？？？？
// $.ajax({
//            url:'http://193.112.55.79:9090/api/getmoneyctrl',
//            type:'get',
//            success:function (res) {
//                console.log(res.result);
//             //    var res = template("template", data);
//              var html= tmpl("goodsTpl", {data:res.result});
//                $('#goodsAll').html(html)
//            }
//        })

});