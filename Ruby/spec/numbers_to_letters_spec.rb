require './numbers_to_letters'

describe 'numbers_to_letters' do
  it 'converts integer to character' do
    c = NumbersToLetters.new
    expect(c.int_to_char(1000)).to eq('ALL')
  end
end