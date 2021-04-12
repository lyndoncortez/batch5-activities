def first_duplicate(arr)
    arr.each do |value|
        return puts value.abs if arr[value.abs - 1] < 0
        arr[value.abs - 1] = -arr[value.abs - 1]
    end
    puts -1
end

first_duplicate([2, 1, 3, 5, 3, 2])

