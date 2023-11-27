class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def create
    @book = Book.new(book_params)
    
    if @book.save
      redirect_to books_path, notice: "投稿に成功しました"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def new
    @book = Book.new
  end

  def show
  end

  def edit
  end

  def destroy
  end

  private

  def book_params
    params.require(:book).permit(:title, :body)
  end
end
