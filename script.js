const orders=[
  ['Aarav Mehta','Pro Workspace','₹2,480','Paid'],
  ['Isha Sharma','Design Kit','₹1,820','Paid'],
  ['Kabir Joshi','Team Plan','₹3,240','Pending'],
  ['Ananya Rao','Pro Workspace','₹2,150','Paid']
];
document.getElementById('ordersBody').innerHTML=orders.map(o=>`<tr><td>${o[0]}</td><td>${o[1]}</td><td>${o[2]}</td><td><span class="status ${o[3].toLowerCase()}">${o[3]}</span></td></tr>`).join('');

const gridColor=getComputedStyle(document.body).getPropertyValue('--line').trim();
new Chart(document.getElementById('revenueChart'),{
 type:'line',
 data:{labels:['Mar','Apr','May','Jun','Jul','Aug','Sep'],datasets:[{data:[8200,10400,9300,13800,12100,18700,24580],borderColor:'#635bff',backgroundColor:'rgba(99,91,255,.08)',fill:true,tension:.42,pointRadius:3,pointBackgroundColor:'#635bff'}]},
 options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{font:{size:9},color:'#8b91a0'}},y:{grid:{color:gridColor},ticks:{font:{size:9},color:'#8b91a0',callback:v=>'₹'+v/1000+'k'}}}}
});
new Chart(document.getElementById('trafficChart'),{
 type:'doughnut',
 data:{labels:['Direct','Search','Social','Other'],datasets:[{data:[42,31,18,9],backgroundColor:['#635bff','#9b8cff','#c4bfff','#ddd'],borderWidth:0}]},
 options:{cutout:'73%',plugins:{legend:{display:false}}}
});

document.getElementById('themeBtn').onclick=()=>{
 document.body.classList.toggle('dark');
 localStorage.setItem('nexa-theme',document.body.classList.contains('dark')?'dark':'light');
};
if(localStorage.getItem('nexa-theme')==='dark') document.body.classList.add('dark');

document.getElementById('menuBtn').onclick=()=>document.querySelector('.sidebar').classList.toggle('open');

document.getElementById('search').addEventListener('input',e=>{
 const q=e.target.value.toLowerCase();
 document.querySelectorAll('.customer,.product,tbody tr').forEach(el=>el.style.display=el.innerText.toLowerCase().includes(q)?'':'none');
});
document.getElementById('downloadBtn').onclick=()=>{
 const blob=new Blob(['NEXA ANALYTICS REPORT\n\nRevenue: ₹24,580\nActive Users: 8,642\nOrders: 1,429\nConversion: 6.24%'],{type:'text/plain'});
 const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='nexa-report.txt';a.click();
};
