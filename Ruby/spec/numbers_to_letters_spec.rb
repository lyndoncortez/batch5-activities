require './numbers_to_letters'

RSpec.describe NumbersToLetters do
  c = NumbersToLetters.new
  num = 1000

  context "convert method is called" do
    it 'converts integer to character' do
      expect(c.int_to_char(num)).to eq('ALL')
    end
  end
end