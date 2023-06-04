//my solution:
function match(candidate, job) {
    if(candidate.minSalary === undefined || job.maxSalary === undefined) {
      throw new Error("no job or no candidate")
    }
    
    let candidateSalary =  candidate.minSalary - (0.1 * candidate.minSalary)
    
    return job.maxSalary >= candidateSalary
}

//better option:
const match = (candidate, job) => {
    if (!job.maxSalary || !candidate.minSalary) throw TypeError('Missing salary');
    return job.maxSalary >= (candidate.minSalary * .9);
};