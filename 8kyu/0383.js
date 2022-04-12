// Job Matching #1

function match(candidate, job) {
    if (candidate.minSalary === undefined || job.maxSalary === undefined) {
      throw new Error("No salary data.")
    }
    return candidate.minSalary * .90 <= job.maxSalary
}