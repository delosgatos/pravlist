/**
 * Created by Pro on 29.04.17.
 */

const $content = $('.content');
const $list = $('.list');
$.get('churches.json',function(data){
   $list.append('<ul>');
   data.forEach(function(o, i){
      $list.append('<li class="list-item"><a href="#'+i+'">'+ o.title+'</a></li>');
   });
   $list.append('</ul>');
});


new Backbone.Router({routes: ['search/:query/p:num']});