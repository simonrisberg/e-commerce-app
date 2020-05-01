import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'htttps://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl: 'htttps://i.ibb.co/px2tCc3/jackets.png',
                id: 2 
            },
            {
                title: 'sneakers',
                imageUrl: 'htttps://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3 
            },
            {
                title: 'womens',
                imageUrl: 'htttps://i.ibb.co/GCCdy8t/womens.png',
                id: 4
            },
            {
                title: 'mens',
                imageUrl: 'htttps://i.ibb.co/R70vBrQ/men.png',
                id: 5
            }]
        }
    }

    render () {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, id}) => (
                    <MenuItem key={id} title={title} />
                ))}
            </div>
        )
    }
}

export default Directory;