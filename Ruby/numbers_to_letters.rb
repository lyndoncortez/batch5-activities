class NumbersToLetters
  Alpha26 = ("A".."Z").to_a
  def int_to_char(num)
    return "" if num < 1
    a, b = "", num
    loop do
      b, c = (b - 1).divmod(26)   # b = quotient, c = remainder
      a.prepend(Alpha26[c])       # a = "c"
      break if b.zero?
    end
    a
  end
end

# convert = NumbersToLetters.new
# puts convert.int_to_char(100)