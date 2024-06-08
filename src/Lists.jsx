import PropTypes from 'prop-types'
function List(props){
    const theList = props.list;
    const cat = props.cat;

    // heroes.sort((a,b) => a.name.localeCompare(b.name)); // Aplha order
    // heroes.sort((a,b) => b.name.localeCompare(a.name)); // Reverse Alpha
    // heroes.sort((a,b) => a.hp - b.hp); //asscending
    /* If a.hp  is less than b.hp therefore the result will be negativev thereby putting a before b */
    // heroes.sort((a,b)=> b.hp-a.hp); //descending


    const ListItems =  theList.map(item => <li key={item.id}>{item.name}: 
                                                &nbsp; <b>{item.hp}</b>
                                                </li>);
    return (<>
                <h3>{cat}</h3>
                <ol>{ListItems}</ol>
                <hr />
            </>
    );
    
}

List.propTypes = {
    cat: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
        name: PropTypes.string,
        hp: PropTypes.number,
    }))
}

function List3(props){
    
      const villains = props.list;
      const cat = props.cat;
      const getRandomHP = () => Math.floor(Math.random() * 100) + 1; // Random HP between 1 and 100
      
      const villainTuples = villains.map(villain => ({
        id: villain.id,
        name: villain.name,
        hp: getRandomHP(),
      }));
      const VillainList =  villainTuples.map(item => <li key={item.id}>{item.name}: 
        &nbsp; <b>{item.hp}</b>
        </li>);

    return (<>
        <h3>{cat}</h3>
        <ol>{VillainList}</ol>
        <hr />
    </>
);
}
List3.propTypes = {
    cat: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
        name: PropTypes.string,
    }))
}

function List2(){
    //for finding weak and strn heroes

    const heroes = [
        { id: 1, name: 'The Flash', hp: 75 },
        { id: 2, name: 'Iris West', hp: 50},
        { id: 3, name: 'Vibe', hp: 60 },
        { id: 4, name: 'Killer Frost',hp: 45 },
        { id: 5, name: 'Elongated Man', hp: 65 },
        { id: 6, name: 'Firestorm', hp: 80 },
      ];

    const strongHeroes = heroes.filter(hero => hero.hp > 60);
    const weakHeroes = heroes.filter(hero => hero.hp < 60);

    const ListItems =  strongHeroes.map(hero => <li>{hero.name}: 
        &nbsp; <b>{hero.hp}</b>
        </li>);
    return (<><ol>{ListItems}</ol><hr /></>);

}

export {List, List2, List3};