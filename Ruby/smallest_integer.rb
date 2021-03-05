def finding_smallest(arr)
    min = arr[0]
    arr.each { |num| num < min && min = num}
    return min
end

puts finding_smallest([34, -345, -1, 100])
