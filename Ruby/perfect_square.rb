def perfect_square?(n)
    i = 1

    if n == 0
        n += 1
    end

    while i * i < n
        i += 1
    end

    puts i * i == n
end

perfect_square?(25)