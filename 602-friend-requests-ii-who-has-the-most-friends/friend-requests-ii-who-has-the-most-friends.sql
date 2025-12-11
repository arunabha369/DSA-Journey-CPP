with cte as (
    select requester_id as id from requestaccepted
    UNION ALL
    select accepter_id from requestaccepted
)

select id , count(*) as num
from cte 
group by id 
order by num desc limit 1;