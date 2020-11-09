import Avatar from './Avatar';

export default function ActivityFeed() {
  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4 text-sm leading-5">
        <Avatar
          size={'md'}
          src={
            'https://pbs.twimg.com/profile_images/1174626220283088896/vMD1tpZx_400x400.jpg'
          }
          alt={'acetdecastro'}
        />
        <span className="text-gray-600">
          <a href="/" className="hover:underline text-black">
            You
          </a>{' '}
          logged in via GitHub
        </span>
      </div>
      <div className="text-xs leading-5 text-gray-500">
        <time dateTime="2020-04-24">26d</time>
      </div>
    </div>
  );
}
