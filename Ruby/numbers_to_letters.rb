class NumbersToLetters
  ALPHA26 = ("A".."Z").to_a
  def int_to_char(num)
    return "" if num < 1
    a, b = "", num
    loop do
      b, c = (b - 1).divmod(26)   # b = quotient, c = remainder
      a.prepend(ALPHA26[c])
      break if b.zero?
    end
    a
  end
end

# con = NumbersToLetters.new
# puts con.int_to_char(100)