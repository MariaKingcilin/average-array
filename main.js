var a=[1,2,3,4,5,6,7,8,9,10];
function add(a)
{
	var total=0;
	var average=0;
	for(i=0;i<a.length;i++)
	{
		total+=a[i];
		average++;
	}
	return total/average;
}
document.write(add(a));