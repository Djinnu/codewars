function isTriangle(a,b,c)
{
   let sorted = Array.from(arguments).sort((a, b) => a - b)
   return sorted[0] + sorted[1] > sorted[2]
}