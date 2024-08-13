
namespace Application.Core
{
    public class Result<T>
    {
        public bool IsSUccess { get; set; }

        public T Value { get; set; }

        public string Error { get; set; }

        public static Result<T> Success(T value) => new Result<T> {IsSUccess = true, Value = value};

        public static Result<T> Failure(string Error) => new Result<T> {IsSUccess = false, Error = Error};
    }
}

