function calculateTip(amount, rating) {
  rating = rating.toLowerCase()
  let r = rating[0].toUpperCase() + rating.slice(1, rating.length)
  
  switch(r) {
      case "Terrible":
        return 0
      case "Poor":
        return Math.ceil(amount * 0.05)
      case "Good":
        return Math.ceil(amount * 0.1)
      case "Great":
        return Math.ceil(amount * 0.15)
      case "Excellent":
        return Math.ceil(amount * 0.2)
      default:
        return "Rating not recognised"
  }
}