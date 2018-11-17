import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user:User;

  constructor() {
    this.user = new User(
      '000',
      'Ronaldinho',
      'Gaúcho',
      'ronaldinho10@gmail.com',
      'rei-dos-dibres123',
      38,
      'male',
      [
        'Fitness',
        'Músico',
        'Festeiro'
      ],
      'https://yt3.ggpht.com/a-/AN66SAwhlV3yEkmvpfcqEgkOdKG3y2JDHwmTsWNzsQ=s900-mo-c-c0xffffffff-rj-k-no',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec aliquet dolor. Mauris purus augue,tincidunt ullamcorper ex ut, tincidunt pellentesque mauris. Ut dapibus neque id sem ultrices, vel lobortis mi placerat. Curabitur sollicitudin varius laoreet. Sed tristique magna felis, tincidunt accumsan orci ultricies nec. Aenean rhoncus lectus nec purus consectetur aliquet. Nulla sodales aliquet velit, nec sodales nisl rhoncus id. In non nulla vel arcu eleifend laoreet.',
      "Porto Alegre",
      "Brasil",
      "setembro de 2018",
      1,
      [],
      [
        {
          user: {
            name: 'Sebozim',
            photo: 'http://www.museudememes.com.br/wp-content/uploads/2017/01/15894684_1134472926682034_7757859649070414556_n.jpg',
            genre: 'male',
            username: 'sebozim'
          },
          message: 'Nam magna leo, fermentum id dolor a, suscipit vulputate metus. Curabitur id aliquam nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          date: '17 de Novembro de 2018'
        },
        {
          user: {
            name: 'Sebozim',
            photo: 'http://www.museudememes.com.br/wp-content/uploads/2017/01/15894684_1134472926682034_7757859649070414556_n.jpg',
            genre: 'male',
            username: 'sebozim'
          },
          message: 'Nam magna leo, fermentum id dolor a, suscipit vulputate metus. Curabitur id aliquam nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          date: '17 de Novembro de 2018'
        }
      ]
    );
  }

}
