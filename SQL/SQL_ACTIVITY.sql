/* ACTIVITY */

--0
select count(distinct inventory_id) as unique_inventory_rented, count(rental_id) as total_rented
from rental;


--1
select f.title as film_title, f.release_year, f.rating, concat(a.first_name,' ',a.last_name) as actor_full_name
from film as f
left join film_actor as fa on f.film_id = fa.film_id
left join actor as a on fa.actor_id = a.actor_id
where a.last_name in('Streep', 'Torn') and a.first_name = 'Dan'
group by f.title, f.release_year, f.rating, actor_full_name
order by f.title;


--2
select concat(a.first_name,' ', a.last_name) as actor_full_name, f.title as film_title, c.name as category_name
from actor as a
left join film_actor as fa on a.actor_id = fa.actor_id
left join film as f on fa.film_id = f.film_id
left join film_category as fc on f.film_id = fc.film_id
left join category as c on fc.category_id = c.category_id
where c.category_id = 5
and a.last_name like 'D%'
group by actor_full_name, f.title, category_name
order by actor_full_name;