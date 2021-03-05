
def finding_smallest(arr)
    min = arr[0]
    for a in arr do
        if a < min
            min = a
        end
    end
    return min
end

puts finding_smallest([34, 15, 88, 2])
