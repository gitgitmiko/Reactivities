using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore.Metadata;
using Persistence;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DataContext _contex;
            public Handler(DataContext contex)
            {
                _contex = contex;
            }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _contex.Activities.FindAsync(request.Id);
            }
        }
    }
}