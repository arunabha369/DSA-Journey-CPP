select 
case when count(*)=1 then num
     else null
     end as num
from mynumbers
group by num
order by 1 desc nulls last
limit 1