#pragma strict
var speed : float = 0.5;
var rot_speed : float = 1.0;
function Start () {

}

function Update () {
	// Now deal with gyroooooo
	var h_mouse : float = Input.GetAxis("Mouse X");
	var v_mouse : float = Input.GetAxis("Mouse Y");
	//var vert : float = Input.GetAxis("Vertical");
	//var horz : float = Input.GetAxis("Horizontal");
	var moveDirection : Vector3 = transform.rotation.eulerAngles;
	// We only care about the yaw of the rotation...
	var yaw : float = moveDirection.y * Mathf.Deg2Rad;
	// "Forward" is (sine of yaw, 0,  cosine of yaw)...
	var fwd : Vector3 = new Vector3(Mathf.Sin(yaw), 0, Mathf.Cos(yaw)).normalized;
	var rt : Vector3 = new Vector3(Mathf.Cos(yaw), 0, -Mathf.Sin(yaw)).normalized;
	var moveVector : Vector3 = fwd * v_mouse * speed;
	transform.position = transform.position + moveVector;
	
	transform.Rotate(0, h_mouse * rot_speed, 0);
	transform.Rotate(-transform.rotation.eulerAngles.x, 0, -transform.rotation.eulerAngles.z);
}