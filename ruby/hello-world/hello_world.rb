class HelloWorld
  
  def self.hello(name = nil)
    name = "World" if !name.is_a? String or name.length == 0
    "Hello, #{name}!"
  end
  
end