const browser = prompt('What your browser?')

if(browser == 'Edge') {
     alert( "You've got the Edge!" );
} else if (browser == 'Chrome' 
|| browser == 'Firefox' 
|| browser == 'Safari' 
|| browser == 'Opera') {
     alert( 'Okey we support these browsers too' );
} else {
     alert( 'We hope that this page looks ok!');
}