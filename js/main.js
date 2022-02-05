// to get the colors to js
const color = (colorValue) => getComputedStyle(document.documentElement).getPropertyValue(`--${colorValue}`).trim();

function toggle_action(that){
    let toggle = that.id
    let $color_card = $('div.color-card');
    let $flip_color_card = $('div.flip-color-card');

    let color_text = '';
     $.each($.merge($color_card,$flip_color_card), function (i, item) {
         let color_id = item.classList[1];
        let color_name = color_id.replace('flip-','').replace('bg-','');
        let div_name = item.classList[0];
        if (toggle === 'css') {
        document.getElementById('css').checked = true;
        color_text =`var(--${color_name})`;} else if (toggle === 'js') {
        document.getElementById('js').checked = true;
        color_text =`color("${color_name}")`;} else if (toggle === 'color') {
        document.getElementById('color').checked = true;
        color_text =`${color_name}`;} else if (toggle === 'bg') {
        document.getElementById('bg').checked = true;
        color_text =`bg-${color_name}`} else if (toggle === 'hex') {
        document.getElementById('hex').checked = true;color_text =`${color(color_name)}`}
        if (div_name.includes('flip')){
             let color_number = parseInt(item.getAttribute('number'))
             $flip_color_id = $(`#flip-${color_id}`);
             if (color_name === 'primary'){
              $flip_color_id.html(`<span class="main-purple-2">${color_text}</span>`)}
              else if (color_name === 'secondary'){
              $flip_color_id.html(`<span class="main-pink-2">${color_text}</span>`)}
              else if (color_name === 'danger'){
              $flip_color_id.html(`<span class="red-2">${color_text}</span>`)}
              else if (color_name === 'warning'){
              $flip_color_id.html(`<span class="amber-2">${color_text}</span>`)}
              else if (color_name === 'success'){
              $flip_color_id.html(`<span class="green-2">${color_text}</span>`)}
              else if (color_name === 'link'){
              $flip_color_id.html(`<span class="blue-2">${color_text}</span>`)}
              else if (color_name === 'info'){
              $flip_color_id.html(`<span class="sky-2">${color_text}</span>`)}
              else if (color_name === 'dark'){
              $flip_color_id.html(`<span class="true-gray-2">${color_text}</span>`)}
              else if (color_name === 'light'){
              $flip_color_id.html(`<span class="true-gray-8">${color_text}</span>`)}
            else if (color_number >= 5){
            $flip_color_id.html(`<span class="${color_name.replace(color_number.toString(),'2')}">${color_text}</span>`)
            }
            else{
                $flip_color_id.html(`<span class="${color_name.replace(color_number.toString(),'7')}">${color_text}</span>`)
            }
            $flip_color_id.attr("onclick",`copy_to_clipboard('${color_text}')`);
        }
        else{
        $(`#${color_id}`).attr("onclick",`copy_to_clipboard('${color_text}')`);
        }

    });

}

function copy_to_clipboard(text) {
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
    swal({
        position: 'bottom-end',
        html: `<b>${text}</b><br> Copied To Clipboard!`,
        type: "success",
        showConfirmButton: false,
        showCloseButton: false,
        timer: 1000,
        footer: `<img src='<a href="https://www.flaticon.com/free-icons/abecedary" title="abecedary icons">Abecedary icons created by bearicons - Flaticon</a>' style="width:80px;height:24px;"/`,
        customClass: 'swal2-popup'
    });
}

